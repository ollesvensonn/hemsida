import Image, { StaticImageData } from "next/image";

export default function MdxLayout({
  image,
  alt,
  children,
}: {
  image: StaticImageData;
  alt: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2fr_1fr] gap-16">
      <Image src={image} alt={alt} width={1000} />
      <div>{children}</div>
    </div>
  );
}
