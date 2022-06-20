import React, {useState, useEffect} from "react";

const PREFIX = "joke-app-";

export default function useLocalStrage( key: String ) {
	const prefixedKey = PREFIX + key;

	const [value, setValue] = useState(()=>{
		const jsonValue = localStorage.getItem(prefixedKey)
		if ( jsonValue !== null ){
			return JSON.parse(jsonValue)
		} else {
			return ""
		}
	})
}