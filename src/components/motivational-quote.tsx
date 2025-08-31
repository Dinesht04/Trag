import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MotivationalQuote() {
  return (
    <div className="flex flex-col items-center justify-center p-8  rounded-lg shadow-sm max-w-md mx-auto">
      <Avatar className="w-16 h-16 mb-6">
        <AvatarImage
          src="https://tdc.org/wp-content/uploads/2012/10/Paul-Rand.jpg"
          alt="Marty Neumeier"
        />
        <AvatarFallback className="text-lg font-medium">MN</AvatarFallback>
      </Avatar>

      <blockquote className="text-center mb-4">
        <p className="text-lg text-gray-700 leading-relaxed mb-1">
          Brand is not what you say it is,
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          It is what they say it is.
        </p>
      </blockquote>

      <cite className="text-sm text-gray-500 font-medium">- Marty Neumeier</cite>
    </div>
  );
}
