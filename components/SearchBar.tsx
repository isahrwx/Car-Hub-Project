"use client";
import { useState } from "react";

import SearchManufacturer from "./SearchManufacturer";

const SearchBae = () => {
  const [manufacturer,setManufacturer]=useState('');
  const handleSearch = () => {

  }
  return (
    <form className='sratchbar' onSubmit={handleSearch}>
      <div className="searchbar__item">
      <SearchManufacturer
      manufacturer={manufacturer} setManufacturer={setManufacturer}
      
      />
      </div>
    </form>
  )
}

export default SearchBae
