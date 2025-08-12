interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  bgColor
}: FeatureCardProps) {
  return (
    <div className="text-center group">
      <div className={`w-20 h-20 ${bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
