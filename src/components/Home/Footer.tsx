import Link from 'next/link';
import React from 'react';

// Define the props interface, even if empty, for clarity and future extensibility
interface FooterProps {}

const Footer: React.FC<FooterProps> = () => (
  <>
    <div className="mt-5 p-2 laptop:mt-40 laptop:p-0">
      <div>
        <h1 className="text-bold text-2xl">Contact.</h1>
        <div className="mt-10">
          <h1 className="text-bold text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl">
            LET&apos;S WORK
          </h1>
          <h1 className="text-bold text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl">
            TOGETHER
          </h1>

          <div className="mt-10" />
        </div>
      </div>
    </div>
    <h1 className="text-bold mt-2 p-2 text-sm laptop:mt-10 laptop:p-0">
      Made With ❤ by{' '}
      <Link href="http://www.chetanverma.com">
        <a className="underline underline-offset-1">Chetan Verma</a>
      </Link>
    </h1>
  </>
);

export default Footer;
