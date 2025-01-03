"use client"
import { useInView, motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";

export default function Profile() {
    const params = useSearchParams();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const state = params.get("state") ? JSON.parse(params.get("state")) : null;


    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    console.log(state, "Received State");

    // const data = router.query.data ? JSON.parse(router.query.data) : null;


    return (
        <section id="Products" className="flex ">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                PRODUCTS
            </h2>
            {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          {uniqueTags.map((tagName, index) => (
            <ProjectTag
              key={index}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </div> */}
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 p-8">
                {state?.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
                            <h5 className="text-xl font-semibold mb-2">{project.Item || "Default Title"}</h5>
                            <p className="text-[#ADB7BE]">{project.Description || "Default Description"}</p>
                        </div>
                        {/* <ProjectCard
                            // key={project.id}
                            title={project}
                            description={project?.Description}
                        // imgUrl={project.image}
                        // gitUrl={project.gitUrl}
                        // previewUrl={project.previewUrl}
                        // filterProducts={filterProducts}
                        // tag={tag}
                        // productData={productData}
                        /> */}
                    </motion.li>
                ))}
            </ul>
        </section>
    );
}