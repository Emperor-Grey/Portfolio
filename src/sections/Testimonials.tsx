import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Image from 'next/image';
import React from 'react';

const testimonials = [
  {
    name: 'Ch. Murali Krishna',
    position: 'HOD, NRI Institute of Technology',
    text: 'Lohit consistently demonstrates a strong grasp of web and mobile development. His dedication to learning and applying new technologies is impressive.',
    avatar: memojiAvatar1,
  },
  {
    name: 'Dr. G. Adi Lakshmi',
    position: 'Professor, NRI Institute of Technology',
    text: 'Lohit has a unique ability to simplify complex concepts. His Python tutoring sessions have greatly benefited his peers.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Karri Sripathi Rao',
    position: 'Classmate',
    text: 'Working with Lohit on our group projects was a game changer. His coding skills and creativity brought our ideas to life.',
    avatar: memojiAvatar3,
  },
  {
    name: 'Bethala Revanth',
    position: 'Fellow Developer',
    text: 'Lohit is a talented developer. His work on our mobile app showcased his skill in delivering user-friendly designs.',
    avatar: memojiAvatar4,
  },
  {
    name: 'Ayyala Hari',
    position: 'Project Partner',
    text: "Lohit's support and knowledge made our project successful. He is always willing to help and share his expertise.",
    avatar: memojiAvatar5,
  },
  {
    name: 'Amrutha',
    position: 'Professor, NRI Institute of Technology',
    text: "Lohit's enthusiasm for coding is infectious. His projects showcase his ability to blend creativity with technical skills.",
    avatar: memojiAvatar2,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className="mt-12 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4 lg:mt-20">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {...new Array(2).fill(0).map((_, i) => (
              <React.Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p-8 p-6 md:max-w-md hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
