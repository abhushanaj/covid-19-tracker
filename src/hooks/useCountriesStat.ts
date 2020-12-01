import {useEffect,useState} from "react";
import axios from "axios";


const useCountriesStat=(countryName:string="")=>{
	const [countryStat,setCountryStat]=useState<any>({});
	const [error,setError]=useState<any>(null);
	
	/* Effect to get country statistics */
	useEffect(()=>{
	try{
		console.log("hello World!")
	}catch(err){
		setError(err.reponse);
	}
	},[countryName])
}


export default useCountriesStat;