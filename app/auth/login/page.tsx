import LoginForm from "@/app/_components/LoginForm";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col min-w-full py-5 px-3 justify-center items-center gap-y-5 md:gap-y-7">
      <h2 className="text-2xl md:text-4xl">Login</h2>
      <LoginForm />
    </div>
  );
};

export default Page;
