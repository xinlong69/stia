import type { TRPCRouterRecord } from "@trpc/server";
import { z } from "zod";

import { desc, eq } from "@packages/db";
import { postSchema } from "@packages/db/schema";
import { protectedProcedure, publicProcedure } from "../trpc";

export const postRouter = {
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db.query.post.findMany({
      orderBy: desc(postSchema.post.id),
      limit: 10,
    });
  }),

  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.db.query.post.findFirst({
        where: eq(postSchema.post.id, input.id),
      });
    }),

  create: protectedProcedure
    .input(postSchema.createPostSchema)
    .mutation(({ ctx, input }) => {
      return ctx.db.insert(postSchema.post).values({
        ...input,
        authorId: ctx.session.user.id,
      });
    }),

  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.db.delete(postSchema.post).where(eq(postSchema.post.id, input));
  }),
} satisfies TRPCRouterRecord;