type Props = {
  title: string;
};

const SectionHeader = ({ title }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 text-center">
      <h1 className="text-[#333333] font-bold text-4xl md:text-5xl">{title}</h1>

      <div
        className="w-20 h-1"
        style={{
          backgroundImage:
            "linear-gradient(to right, #00aeef, #00aeef 25%, #000000 25%, #000000 50%, #fff202 50%, #fff202 75%, #ec0c8c 75%, #ec0c8c 100%)"
        }}
      />
    </div>
  );
};

export default SectionHeader;
