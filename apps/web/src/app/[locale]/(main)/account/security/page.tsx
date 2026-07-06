export default function SecuritySettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Security</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Manage your security settings and authentication methods.
        </p>
      </div>
      {/* Your security inputs go here */}
      <div className="p-4 border border-dashed rounded-lg text-zinc-400 text-sm">
        Security controls...
      </div>
    </div>
  );
}