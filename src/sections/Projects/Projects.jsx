import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://videocall-app-iota.vercel.app/"
          h3="VideoConnect"
          p="Video Calling App"
        />
        <ProjectCard
          src={freshBurger}
          link="https://github.com/Abhishek8287/Twilingo"
          h3="Twillingo"
          p="Social Media App"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Abhishek8287/SFLC"
          h3="MovieFlex"
          p="Movie Searching Website"
        />
        <ProjectCard
          src={fitLift}
          link="https://shooter-game-fawn.vercel.app/"
          h3="Web shooter game"
          p="Shooting game"
        />
      </div>
    </section>
  );
}

export default Projects;
