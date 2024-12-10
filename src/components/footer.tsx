import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className="bg-background flex flex-col items-center justify-center w-full py-4 gap-4">
      <div className="flex items-center justify-center gap-8">
        <FaArrowLeftLong size={25} />
        <FaArrowRightLong size={25} />
      </div>
      <div className="text-center space-y-2">
        <p>Made by Kabby</p>
        <p>&copy; 2024. All right reserved</p>
      </div>
    </section>
  );
}
