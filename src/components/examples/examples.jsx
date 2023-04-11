//PROPS EN REACT

const Button = ({ callback }) => {
  return <button onClick={callback}>Mostrar texto en consola</button>;
};

const ComponentePadre = ({ texto }) => {
  const handleClick = () => {
    console.log(texto);
  };

  return <Button callback={handleClick} />;
};

export default ComponentePadre;
