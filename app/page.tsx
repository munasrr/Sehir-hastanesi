import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="Patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
        </div>
      </section>
    </div>
  );
}
