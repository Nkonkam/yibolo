import { Btn } from "./Btn";

export const HeaderSection = () => {
  return (
    <div>
      <h1 className="  text-4xl font-bold text-zinc-800 leading-[32.4px] -tracking-[-0.12px]">
        Trouvez l'école idéale pour vous
      </h1>
      <p className="mt-4 text-[19px] max-w-[800px] leading-[26.6px] text-zinc-800">
        Explorez un vaste choix de formations parmi plus de 250 000 options. De
        nouvelles écoles et programmes sont ajoutés régulièrement pour vous
        offrir les meilleures opportunités d'apprentissage. Trouvez l'école qui
        correspond parfaitement à vos ambitions et commencez votre parcours
        académique dès aujourd'hui.
      </p>

      <div className="my-10">
        <Btn type="secondary">Decouvrez Python</Btn>
      </div>
    </div>
  );
};
