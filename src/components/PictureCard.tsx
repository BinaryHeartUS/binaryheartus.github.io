interface PictureCardProps {
  imageSrc: string;
  name: string;
  role: string;
  subtitle?: string;
}

export default function PictureCard({ imageSrc, name, role }: PictureCardProps) {
  return (
    <div className="relative rounded-2xl bg-white/80 backdrop-blur-sm p-4 shadow-lg ring-1 ring-gray-900/5 text-center">
      <div className="mb-4 mx-auto h-32 w-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
        <img 
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}
