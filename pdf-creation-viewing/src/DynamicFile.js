import axios from "axios"
import { useEffect, useState } from "react"
import { Document, Page } from "react-pdf"
import ReactPDF from '@react-pdf/renderer';

export const DynamicFile=()=>{
    const[records,setRecords]=useState([])
    const openPdf=(url)=>{
        console.log(url)
        window.open(url,'_blank')
    }
    const onLoad=async()=>{
        const temp = await axios.get('http://localhost:8000/')
        setRecords(temp.data.records)
    }
    useEffect(()=>{
        onLoad()
    },[])
    const [pdfData, setPdfData] = useState(null);
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th><th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        records.map((data)=>(
                            <tr>
                                <td>{data.name}</td>
                                <td>
                                    {/* <Document file="http://localhost:8000/supply/umang">
                                    </Document> */}
                                    <input type="button" value="View" onClick={async()=>{
                                        try{
                                            const t = await axios.get(`http://localhost:8000/supply/${data.file}`)
                                            console.log(t.data)
                                            const pdfBlob = new Blob([t.data], { type: 'application/pdf' });
                                            console.log(URL.createObjectURL(pdfBlob))
                                            setPdfData(URL.createObjectURL(pdfBlob));
                                        }
                                        catch(err){
                                            console.error('Error fetching PDF:', err);
                                        }
                                    }}/>
                                </td>
                                {/* <input type="button" value="View" onClick={()=>openPdf(data.url)}/> */}
                                {/* <a href={data.url} target="_blank" rel="noreferrer">View</a> */}
                                {/* <input type="button" value="View" onClick={async()=>{
                                    const t = await axios.get(`http://localhost:8000/supply/${data.file}`)
                                    const pdfBlob = new Blob([t.data], { type: 'application/pdf' });
                                    setPdfData(URL.createObjectURL(pdfBlob));
                                }}/> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {pdfData && <iframe src={pdfData} width="100%" height="500px" title="PDF Viewer" />}
        </>
    )
}