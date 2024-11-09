import Image from 'next/image';
import PatientForm from '../components/forms/PatientForm';
import Link from 'next/link';
export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">

      {/* Todo : OTP Verifaction| passkey model*/}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496]">
          <Image
            src="/assets/icons/logo-full.svg"
            width={1000}
            height={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">

            <p className='justify-items-end text-dark-600 xl:test-left'> © 2024 Sehir hastanesi</p>

            <Link href="/?admin=true" className="text-green-500">
            Admin
            </Link>
          </div>
        </div>
      </section>

    <Image
    src="/assets/images/onboarding-img.png"
    height={1000}
    width={1000}
    alt='Patient'
    className='side-img max-w-w-[50%]'
    />
    </div>
  );
}
