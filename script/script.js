// apaga o histórico de posição do scroll quando a página é recarregada
if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);