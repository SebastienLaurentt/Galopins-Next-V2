interface AccountSectionHeaderProps {
  title: string;
}

const AccountSectionHeader = ({ title }: AccountSectionHeaderProps) => {
  return (
    <h3 className="mx-auto mb-4 mt-6 text-center text-black md:mb-6 md:w-[400px] lg:w-[500px]">
      {title}
    </h3>
  );
};

export default AccountSectionHeader;
