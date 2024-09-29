function NgoBrowserComponent (){
    return (
        <div>
            {/*<h1 className={style.title}>Cześć,</h1>
            <h2 className={style.subtitle}>Oto organizacje, które mogą Cię zainteresować</h2>*/}
            //tu jest lista wszystkich organizacji które pasują po tagach, possibly przewijana, trzeba napisać algorytm dobierania po dobrych tagach i niedalekiej lokalizacji (to samo województwo)
            //jest robiony do tego request backendowy, któremu musisz tylko wyslac ID tagów firmy na którą jseteś zalogowany

            //possibly przycisk do pokazania WSZYSTKICH ngo, nie tylko tych pasujących do tagów

        </div>
    )
}

export default NgoBrowserComponent;