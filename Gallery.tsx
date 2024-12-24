@@ -0,0 +1,36 @@
import Image from "../components/image.tsx";
import {Navbar} from "../components/Navbar.tsx";
import MetaTags from "../components/MetaTags.tsx";
export default function Gallery() {
    return(
        <>
            <MetaTags title="Mamawsheart - Gallery!"
                      name="Mamawsheart"
                      description="View our lovely images!"
                      image="https://utfs.io/f/QI8sw9xDXLhG7N2LxxPGTW2ZDCGlgBULJ7VbdyN0QksOw83P"/>
            <Navbar/>
            <h1 className="text-center text-4xl font-bold mt-10 mb-10">Christmas Gallery</h1>
            <Image
                picture1={"https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"}
                title1={"Church"}
                picture3={"https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"}
                title3={"Church"}
                picture4={"https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"}
                title4={"Church"}
            />
            <Image
                picture2={"https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"}
                title2={"Church"}
                picture4={"https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"}
                title4={"Church"}
            />
            <Image
                picture1={"https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"}
                title1={"Church"}
                picture3={"https://utfs.io/f/QI8sw9xDXLhGVvKjqsQwkRc8SgNGDZmFqpdPfsOeYAh4IT3n"}
                title3={"Church"}
            />
        </>
    )
}
