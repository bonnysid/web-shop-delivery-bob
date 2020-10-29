const openMain = ({mainSection, showSections, hiddenSections, hideClass = 'hide'}) => {
    if (mainSection.classList.contains(hideClass)) {
        hiddenSections.forEach(item => item.classList.add(hideClass));
        showSections.forEach(item => item.classList.remove(hideClass));
        mainSection.classList.remove(hideClass);
    }
}  

export default openMain;