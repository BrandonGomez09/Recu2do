import { useNavigate } from 'react-router-dom';
const useNavigateFunc = () => {
    const navigate = useNavigate();
    const handlerClick2 = () => {
        // alert("funciona");
        navigate('/');
    }
    return [
        {
            nombre: "Inicio",
            funcion: handlerClick2,
        },
        {
            nombre: "Grupos",
        },
        {
            nombre: "Articulos",
        },
        {
            nombre: "Comunicados",
        },
    ];
};
export default useNavigateFunc;
