import React, {useState} from 'react'

type DictionaryContextObject = {
    wordData: {data: any}
    newWordData: (data: any)=> void
}

export const DictionaryContext = React.createContext<DictionaryContextObject>({
    wordData: {data: null},
    newWordData: ()=>{}
})

interface Props {
    children: React.ReactNode
}

const DictionaryContextProvider: React.FC<Props> = ({children}) => {
    const [wordData,setWordData] = useState<any|null>({data: null})


    const newWordData = (data: any) => {
        setWordData({data: data})
    }

    const contextValue: DictionaryContextObject = {
        wordData: wordData.data,
        newWordData
    }
    return (
        <DictionaryContext.Provider value={contextValue}>
            {children}
        </DictionaryContext.Provider>
    )
}
export default DictionaryContextProvider