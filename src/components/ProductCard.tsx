interface ProductCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  buttonColor: string;
  iconBgColor: string;
}

export default function ProductCard({
  icon,
  title,
  description,
  features,
  buttonColor,
  iconBgColor
}: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
      <div className={`w-16 h-16 ${iconBgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-6">
        {description}
      </p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-slate-600">
            <span className={`w-2 h-2 ${buttonColor.replace('bg-', 'bg-').replace('-600', '-600')} rounded-full mr-3`}></span>
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full ${buttonColor} text-white py-3 rounded-lg hover:${buttonColor.replace('-600', '-700')} transition-colors duration-300`}>
        Learn More
      </button>
    </div>
  );
}
