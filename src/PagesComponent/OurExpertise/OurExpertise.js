import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OurExpertiseBox from "./OurExpertiseBox";
import { fetchApi } from "@/utils/api";

const OurExpertise = () => {
  const [activeTab, setActiveTab] = useState(""); 
  const [expertiseData, setExpertiseData] = useState({}); 
  const [tabs, setTabs] = useState([]); 
  const [skills, setSkills] = useState([]); 

  useEffect(() => {
    const fetchExpertiseData = async () => {
      try {
        const response = await fetchApi("/technologies"); // Fetch technology categories
        const data = response.data;

        const transformedData = {};
        const uniqueTabs = [];

        data.forEach((item) => {
          const categoryName = item.name; // Assuming 'name' holds the category
          if (!uniqueTabs.includes(categoryName)) {
            // Check if the category already exists
            uniqueTabs.push(categoryName); // Add to the array if it doesn't exist
          }
          transformedData[categoryName] = item.id; // Store technology ID for fetching skills later
        });

        setExpertiseData(transformedData);
        setTabs(uniqueTabs); // Use the array directly, maintaining order
        setActiveTab(uniqueTabs[0]); // Set default active tab to the first category
      } catch (error) {
        console.error("Error fetching expertise data:", error);
      }
    };

    fetchExpertiseData();
  }, []);

  // Fetch skills when the active tab changes
  useEffect(() => {
    const fetchSkills = async () => {
      if (activeTab) {
        setSkills([]); // Clear previous skills
        try {
          const techId = expertiseData[activeTab]; // Get the technology ID based on the active tab
          const response = await fetchApi(`/skills`); // Fetch skills for that technology

          // Filter skills based on technology_id
          const filteredSkills = response.data.filter(
            (skill) => skill.technology_id === techId
          );
          setSkills(filteredSkills); // Set filtered skills based on the response
        } catch (error) {
          console.error("Error fetching skills:", error);
        }
      }
    };

    fetchSkills();
  }, [activeTab, expertiseData]);

  return (
    <section id="expertise" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Expertise"
          paragraph="We specialize in modern web technologies to build cutting-edge applications. Explore the core skills we excel at."
          center
          width="665px"
        />

        {/* Tab Navigation */}
        <div className="mb-10 flex flex-col justify-center md:flex-row">
          <div className="flex flex-wrap justify-center space-x-4 md:space-x-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`relative px-4 py-2 font-semibold transition-colors duration-500 ${
                  activeTab === tab
                    ? "border-b-4 border-primary text-primary"
                    : "border-b-4 border-transparent text-gray-500 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.toUpperCase()}
                <span
                  className={`absolute -bottom-1 left-0 right-0 h-1 transition-colors duration-300 ${
                    activeTab === tab ? "bg-primary" : "bg-transparent"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <OurExpertiseBox
              key={skill.id} // Use a unique identifier for each skill
              image={skill.image_url} // Assuming your skill object contains the image path
              title={skill.name} // Assuming your skill object contains the title
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
