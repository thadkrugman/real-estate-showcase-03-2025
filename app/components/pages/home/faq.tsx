import Container from '@/components/shared/container';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Plus, Minus } from 'lucide-react';

const faq = [
  {
    question: 'How do I get pre-approved for a mortgage?',
    answer:
      "To get pre-approved for a mortgage, start by checking your credit score and gathering financial documents like pay stubs, tax returns, and bank statements. Then contact several lenders to compare rates and terms. They'll review your finances and provide a pre-approval letter stating how much you can borrow, which strengthens your position when making offers on properties.",
  },
  {
    question: "What's the best time to sell my property?",
    answer:
      'The best time to sell varies by location, but spring and early summer are typically strong selling seasons in many markets. However, local factors like job growth, interest rates, and inventory levels often matter more than season. For the best results, consult with a local real estate agent who understands your specific market conditions and can help time your sale strategically.',
  },
  {
    question: 'What are my responsibilities as a landlord?',
    answer:
      "As a landlord, you're responsible for maintaining a habitable property (including structural elements, plumbing, heating, and electrical systems), complying with local housing codes, respecting tenant privacy, handling security deposits properly, and following fair housing laws. You should also carry appropriate insurance, respond promptly to repair requests, and understand eviction procedures in your jurisdiction.",
  },
  {
    question: 'How can I determine the right asking price for my home?',
    answer:
      "To determine the right asking price, research comparable properties that have recently sold in your neighborhood, consider your home's unique features and condition, account for current market trends, and get a professional comparative market analysis (CMA) from a real estate agent. You might also consider getting a professional appraisal. Pricing correctly from the start typically leads to faster sales and better outcomes.",
  },
  {
    question: 'What should I look for during a property inspection?',
    answer:
      'During a property inspection, pay close attention to the structural integrity, roof condition, electrical and plumbing systems, HVAC functionality, signs of water damage or mold, foundation issues, and pest infestations. While hiring a professional inspector is recommended, you should personally check for red flags like unusual odors, fresh paint that might cover problems, and the age and condition of major appliances and systems.',
  },
];

export default function FAQ() {
  return (
    <Container tag='section' className='mt-24 md:mt-36'>
      <div className='relative w-full md:pb-16 rounded-b-lg overflow-hidden'>
        <div className='absolute bottom-0 right-0 w-64 hidden md:block'>
          <img src='/images/home/hand-house.webp' alt='' />
        </div>
        <div className='relative z-10 w-full'>
          <h2 className='heading-2 text-center text-balance'>
            Frequently Asked Questions
          </h2>
          <p className='text-center text-muted-foreground max-w-xl mx-auto mt-4 text-balance'>
            We've compiled a list of frequently asked questions to help you get
            started. If you have any other questions, please don't hesitate to
            contact us.
          </p>
          <div className='mt-14 flex flex-col md:flex-row gap-6'>
            <div className='w-full gap-y-6 flex flex-col'>
              {faq.slice(0, 3).map((item) => (
                <div
                  key={item.question}
                  className='border rounded-lg p-4 w-full bg-background'
                >
                  <Collapsible className='w-full space-y-2'>
                    <div className='flex items-center justify-between space-x-4'>
                      <h4 className='text-sm font-semibold'>{item.question}</h4>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant='default'
                          size='sm'
                          className='group rounded-sm aspect-square data-[state=closed]:bg-transparent data-[state=closed]:text-primary data-[state=closed]:hover:bg-accent data-[state=closed]:shadow-none'
                        >
                          <Plus className='h-4 w-4 group-data-[state=open]:hidden group-data-[state=closed]:block' />
                          <Minus className='h-4 w-4 group-data-[state=closed]:hidden group-data-[state=open]:block' />
                          <span className='sr-only'>Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className='space-y-2'>
                      <div>
                        <p className='text-muted-foreground text-sm mt-3'>
                          {item.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>
            <div className='w-full gap-y-6 flex flex-col'>
              {faq.slice(3).map((item) => (
                <div
                  key={item.question}
                  className='border rounded-lg p-4 w-full bg-background'
                >
                  <Collapsible className='w-full space-y-2'>
                    <div className='flex items-center justify-between space-x-4'>
                      <h4 className='text-sm font-semibold'>{item.question}</h4>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant='default'
                          size='sm'
                          className='group rounded-sm aspect-square data-[state=closed]:bg-transparent data-[state=closed]:text-primary data-[state=closed]:hover:bg-accent data-[state=closed]:shadow-none'
                        >
                          <Plus className='h-4 w-4 group-data-[state=open]:hidden group-data-[state=closed]:block' />
                          <Minus className='h-4 w-4 group-data-[state=closed]:hidden group-data-[state=open]:block' />
                          <span className='sr-only'>Toggle</span>
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className='space-y-2'>
                      <div>
                        <p className='text-muted-foreground text-sm mt-3'>
                          {item.answer}
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
