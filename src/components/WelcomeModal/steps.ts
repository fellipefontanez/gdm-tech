import { Step } from "react-joyride";
export const steps: Step[] = [
    {
        target: '.first-step',
        content: 'Clicando nessa setinha da pra ver e organizar seus esportes preferidos!',
        title: "Favoritos",
        placement: "bottom",
        disableBeacon: true,
    },
    {
        target: '.second-step',
        title: "Início",
        content: 'Se quiser voltar pro início é só clicar aqui.',
    },
    {
        target: '.third-step',
        title: "Lista de Jogos",
        content: "Aqui você vê os jogos por categoria.",
        placement: "top",
    },
    {
        target: '.forth-step',
        title: "Adicionar aos favoritos",
        content: "Se esse esporte é a sua cara, da pra adicionar ele nos favoritos clicando aqui.",
        placement: "top",

    },
    {
        target: '.fifth-step',
        title: "Detalhes da partida",
        content: "Quando quiser ver os detalhes de uma partida em específico, é só clicar nela.",
        placement: "top",
    },
];

export const styles = {
    options: {
        zIndex: 10000,
        arrowColor: "#fff",
        backgroundColor: "#fff",
        overlayColor: "rgba(0, 0, 0, 0.5)",
        primaryColor: "#2563eb",
        textColor: "#000",
    },
    buttonNext: {
        backgroundColor: "#2563eb",
        color: "#fff",
    },
    buttonBack: {
        color: "#2563eb",
        marginRight: 10,
    },
    buttonClose: {
        color: "#2563eb",
    },
}