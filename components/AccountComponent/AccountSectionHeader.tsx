interface AccountSectionHeaderProps {
  title: string;
}

const AccountSectionHeader = ({ title }: AccountSectionHeaderProps) => {
  return (
    <h3 className="m-1 mx-auto text-center text-black md:w-[400px] lg:w-[500px]">
      {title}
    </h3>
  );
};

export default AccountSectionHeader;
