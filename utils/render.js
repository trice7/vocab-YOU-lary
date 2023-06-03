const renderToDom = (targetId, content) => {
  document.querySelector(targetId).innerHTML = content;
};

export default renderToDom;
