export default function LanguageSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Language</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Choose your preferred language for the interface.
        </p>
      </div>
      {/* Your language selector inputs go here */}
      <div className="p-4 border border-dashed rounded-lg text-zinc-400 text-sm">
        Language selection controls...
      </div>
    </div>
  );
}