export default function BillingSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Manage your billing information and payment methods.
        </p>
      </div>
      {/* Your billing inputs go here */}
      <div className="p-4 border border-dashed rounded-lg text-zinc-400 text-sm">
        Billing controls...
      </div>
    </div>
  );
}