



const Country = ({country}) => {
    const {name, region, flag}=country;

    return (
        <div className="border-2 p-3 rounded-2xl">
            {/* <img src={flag} alt="" /> */}
            <h3 className="text-2xl font-bold">{name}</h3>
            <p>{region}</p>
        </div>
    );
};

export default Country;