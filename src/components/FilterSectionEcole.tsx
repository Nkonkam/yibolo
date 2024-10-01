import { Accordion } from "./Accordion";

export const FilterSectionEcole = () => {
  const categories = {
    Domaine: [
      { label: "Informatique", value: "informatique" },
      { label: "Gestion", value: "gestion" },
      { label: "Marketing", value: "marketing" },
    ],
    Diplôme: [
      { label: "Bachelier", value: "bachelier" },
      { label: "Master", value: "master" },
      { label: "Doctorat", value: "doctorat" },
    ],
    Filière: [
      { label: "Sciences", value: "sciences" },
      { label: "Arts", value: "arts" },
      { label: "Économie", value: "economie" },
    ],
    Spécialité: [
      { label: "Développement Web", value: "dev-web" },
      { label: "Gestion de Projet", value: "gestion-projet" },
      { label: "Data Science", value: "data-science" },
    ],
    Option: [
      { label: "Formation en Ligne", value: "formation-en-ligne" },
      { label: "Formation Présentielle", value: "formation-presentielle" },
    ],
    Certifiée: [{ label: "Oui", value: "oui" }],
  };

  return (
    <div className="">
      {Object.entries(categories).map(([title, options], index) => (
        <Accordion key={index} title={title} options={options} />
      ))}
    </div>
  );
};
