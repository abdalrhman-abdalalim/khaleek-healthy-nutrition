// components/ui/EmptyState.tsx
interface EmptyStateProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export default function EmptyState({
  title = "لا توجد بيانات",
  message = "لم يتم العثور على أي إحصائيات.",
  icon = "📊",
  action,
}: EmptyStateProps) {
  return (
    <div className="text-center p-8">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-500 mb-4">{message}</p>
      {action}
    </div>
  );
}
