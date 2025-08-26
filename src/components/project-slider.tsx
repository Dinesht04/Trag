'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Sound Station',
    image:
      'https://framerusercontent.com/images/l0idpE6V07fBAS1aCG7tUAQhM.png?scale-down-to=512',
    description:
      'A modern music streaming platform with intuitive design and seamless user experience for discovering and enjoying your favorite tracks.',
  },
  {
    id: 2,
    title: 'AI Meeting Recorder',
    image:
      'https://framerusercontent.com/images/9pGqqgjCxhqbwBP314576hj3I9k.png?scale-down-to=512',
    description:
      'Smart meeting recording solution powered by AI that automatically transcribes, summarizes, and organizes your important conversations.',
  },
  {
    id: 3,
    title: 'Coffee Branding',
    image:
      'https://framerusercontent.com/images/eDdQZwKrMefc2yddQTsXyYzXQ.png?scale-down-to=512',
    description:
      'Complete brand identity design for premium coffee products, featuring warm colors and elegant packaging that captures the essence of quality.',
  },
  {
    id: 4,
    title: 'Notable Events',
    image:
      'https://framerusercontent.com/images/9pGqqgjCxhqbwBP314576hj3I9k.png?scale-down-to=512',
    description:
      'Event management platform that helps organize and track important occasions with beautiful interfaces and powerful scheduling tools.',
  },
  {
    id: 5,
    title: 'Sound Station',
    image:
      'https://framerusercontent.com/images/l0idpE6V07fBAS1aCG7tUAQhM.png?scale-down-to=512',
    description:
      'A modern music streaming platform with intuitive design and seamless user experience for discovering and enjoying your favorite tracks.',
  },
  {
    id: 6,
    title: 'AI Meeting Recorder',
    image:
      'https://framerusercontent.com/images/9pGqqgjCxhqbwBP314576hj3I9k.png?scale-down-to=512',
    description:
      'Smart meeting recording solution powered by AI that automatically transcribes, summarizes, and organizes your important conversations.',
  },
  {
    id: 7,
    title: 'Coffee Branding',
    image:
      'https://framerusercontent.com/images/eDdQZwKrMefc2yddQTsXyYzXQ.png?scale-down-to=512',
    description:
      'Complete brand identity design for premium coffee products, featuring warm colors and elegant packaging that captures the essence of quality.',
  },
];

export function ProjectSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {projects.map((project, index) => (
            <CarouselItem
              key={`${project.id}-${index}`}
              className="pl-2 md:pl-4 mx-20 basis-1/5"
            >
              <Card
                className="overflow-hidden cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-4 hover:shadow-2xl shadow-lg bg-white p-0  group "
                style={{ width: '478px', height: '501px' }}
              >
                <CardContent className="p-2 h-full flex flex-col bg-white">
                  <div
                    className="relative overflow-hidden rounded-lg mb-6 p-2"
                    style={{ height: '280px' }}
                  >
                    <img
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-start">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex justify-center mt-6 space-x-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              current % projects.length === index
                ? 'bg-gray-800'
                : 'bg-gray-300 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
