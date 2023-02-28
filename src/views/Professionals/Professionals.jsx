import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProfessionalsFilters, getAreas } from "../../features/apiPetitions";
import ProfessionalsCard from "./Card/ProfessionalsCard";
import style from "./index.module.css";
import Pagination from "./pagination.jsx";
import PriceOrdering from "./PriceOrdering.jsx";
import SearchBar from "./SearchBar.jsx";
import AreaSliderFilter from "../../components/AreaSliderFilter/AreaSliderFilter";
import CalificationOrdering from "./CalificationOrdering";

export default function Professionals() {
  const { area } = useParams();
  // agrege en redux el estado global de los profesionales para poder hacer los filtros dinamicos
  const dispatch = useDispatch();
  // en la const proffessionals contiene todos los profesionales por area

  const professionals = useSelector(
    (state) => state.professionals.FilterProfessional
  );

  useEffect(() => {
    getProfessionalsFilters({
      state: dispatch,
      area: area ? area : null,
      type: "global",
    });
    setSelect({
      selectOne:'Ordena por precio',
      selectTwo:'Ordena por calificacion'
    });
    setCurrentPage(1);
  }, [area]);

  useEffect(() => {
    getAreas(setAreas);
  }, []);

  const [select, setSelect]= useState({
    selectOne:'Ordena por precio',
    selectTwo:'Ordena por calificacion'
  })
  const [areas, setAreas] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [ProfessionalsPerPage, setProfessionalsPerPage] = useState(8);
  const indexOfLastProfessional = currentPage * ProfessionalsPerPage;
  const indexOfFirstProfessional =
    indexOfLastProfessional - ProfessionalsPerPage;
  useEffect(() => {
    if (window.screen.width < 650) {
      setProfessionalsPerPage(6);
    }
  }, [window.screen.width]);
  const areaDescription = areas?.find((e) => e.area === area)?.description;
  return (
    <div className={style.container}>
      <h2 className={style.title}>{area}</h2>

      <div className={style.description}>
        {areaDescription && <p>{areaDescription}</p>}
      </div>
      <div className={style.ContainerAreaSliderFilter}>
        <div className={style.filter}>
          <AreaSliderFilter />
        </div>
      </div>
      <div className={style.searchBarAndOrder}>
        <div className={style.containerSearchBar}>
          <SearchBar area={area} setSelect={setSelect}  setCurrentPage={setCurrentPage}/>
        </div>
        <div className={style.filtersDiv}>
          <PriceOrdering select={select} setSelect={setSelect} />
          <CalificationOrdering select={select} setSelect={setSelect} />
        </div>
      </div>
      <div className={style.cardContainer}>
        {professionals &&
          professionals
            .slice(indexOfFirstProfessional, indexOfLastProfessional)
            .map((e, i) => (
            <ProfessionalsCard
                key={i}
                id={e.id}
                name={e.name}
                lastName={e.lastName}
                areas={e?.areas || 'Depresion'}
                avatar={e.avatar}
                skills={e?.skills}
                price={e?.price}
                score={e?.score}
              />
              ))}
      </div>
      <Pagination
        ProfessionalsPerPage={ProfessionalsPerPage}
        allProfessionals={professionals?.length}
        currentPage={currentPage}
        paginado={setCurrentPage}
      />
    </div>
  );
}
