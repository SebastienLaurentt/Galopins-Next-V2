import LinkButton from "@/components/Button/LinkButton/LinkButton";
import ImgAnimation from "@/components/ImgAnimation/Img.Animation";
import Section from "@/components/Section/Section";

export default function NotFound() {
  const animation =
    "https://lottie.host/5b46926b-3fb0-4a93-b3a6-a96ffb7c537b/ZaidZSakBt.json";
  return (
    <main className="mb-20">
      <Section marginBottom={false} marginTop={false} classname="text-center mt-12 lg:mt-20 xl:mt-8 max-w-[360px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[1280px] mx-auto">
        <div className="mb-8 lg:mb-16 xl:mb-8">
          <h1 className="mb-4">La page n&apos;existe pas !</h1>
          <p>Il semblerait que vous vous soyez trompez de chemin !</p>
        </div>
        <ImgAnimation animation={animation} />
        <LinkButton
          seeMoreButton={true}
          href="/parcours"
          linkName="Retourner à l'accueil"
        />
      </Section>
    </main>
  );
}
