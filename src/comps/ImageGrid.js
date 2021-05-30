import React from 'react'
import UseFirestore from '../hooks/UseFirestore'
import { motion } from 'framer-motion';

function ImageGrid({ setSelectedImg }) {

    const { docs } = UseFirestore("Images");
    console.log(docs); 

    return(
        <div className="img-grid">
          {docs?.map((doc) =>{
              return(
                <motion.div 
                    className="img-wrap" 
                    key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }} 
                    onClick={ () => {setSelectedImg(doc.url)} } 
                >

                    <motion.img src={doc.url} alt="images" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }} />
                </motion.div>)
            })}  
        </div>
    )
}

export default ImageGrid
