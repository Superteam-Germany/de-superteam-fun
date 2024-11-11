interface BlurredCardProps {
  children: React.ReactNode;
  className?: string;
}

export function BlurredCard({ children, className = '' }: BlurredCardProps) {
  return (
    <div 
      className={`relative isolate overflow-hidden bg-gradient-to-br from-secondary/70 backdrop-blur-md via-secondary/50 to-background/30  shadow-2xl sm:rounded-3xl p-6 ${className}`}
    >
      {children}
    </div>
  );
} 