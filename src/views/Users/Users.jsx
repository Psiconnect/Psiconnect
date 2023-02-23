import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Professionals/pagination.jsx";
import ProfessionalsCard from "../Professionals/Card/ProfessionalsCard";
import { useEffect, useState } from "react";
import style from "./Users.module.css";
import SearchBar from "../Professionals/SearchBar.jsx";
import { getProfessionalsFilters } from "../../features/apiPetitions.js";
import PriceOrdering from "../Professionals/PriceOrdering.jsx";
import CalificationOrdering from "../Professionals/CalificationOrdering.jsx";

export default function Users() {
  const professionals = useSelector(
    (state) => state.professionals.FilterProfessional
  );
  const dispatch = useDispatch();

  useEffect(() => {
    getProfessionalsFilters({
      type: "global",
      state: dispatch,
      area: null,
      name: "",
      lastName: null,
    });
  }, []);
  const [selectTwo, setSelectTwo] = useState("Ordena por calificacion");
  const [select, setSelect]= useState('Ordena por precio')
  const [currentPage, setCurrentPage] = useState(1);
  const [ProfessionalsPerPage, setProfessionalsPerPage] = useState(8);
  useEffect(() => {
    if (window.screen.width < 650) {
      setProfessionalsPerPage(6);
    }
  }, [window.screen.width]);
  const indexOfLastProfessional = currentPage * ProfessionalsPerPage;
  const indexOfFirstProfessional =
    indexOfLastProfessional - ProfessionalsPerPage;
  return (
    <div className={style.container}>
      <div className={style.searchBarAndOrder}>
      <div className={style.containerSearchBar}>
        <SearchBar setSelect={setSelect}/>
      </div>
      <div className={style.filtersDiv}>
        <PriceOrdering select={select} setSelect={setSelect} />
        <CalificationOrdering select={selectTwo} setSelect={setSelectTwo} />
      </div>
      </div>
      <div className={style.cardContainer}>
        {professionals &&
          professionals
            .filter((prof) => prof.state === "avalible")
            .slice(indexOfFirstProfessional, indexOfLastProfessional)
            .map((e, i) => (
              <ProfessionalsCard
                key={i}
                id={e.id}
                name={e.name}
                lastName={e.lastName}
                areas={e.areas}
                avatar={e.avatar}
                skills={e.skills}
                price={e.price}
                score={e.score}
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
