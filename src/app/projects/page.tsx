import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { Metadata } from "next";
import AllProjects from "./_components/AllProjects";
import BackendProjects from "./_components/BackendProjects";
import IOSProjectSection from "./_components/IOSProjects";
import MobileApps from "./_components/MobileAppsProjects";
import WebsiteProjects from "./_components/WebsiteProjects";


export const metadata: Metadata = {
  title:
    "React Native, WordPress, Shopify and many other projects by Vinaypartap Singh.",
  description:
    "Discover a collection of React Native projects, including a Laundry application, Job Finder app, Image and Video Uploading app, and a YouTube UI Clone.",
  keywords:
    "React Native, Laundry App, Job Finder, Image Upload, Video Upload, YouTube UI Clone, Daily1Blog, Blog Website, Full Stack Development.",
};

export default function Projects() {
  return (
    <div>
      <div className="min-h-screen pt-10 max-w-4xl m-auto">
        <div className="px-10 lg:px-0">
          <h1 className={`text-4xl`}>Projects</h1>
          <p className="mt-5 leading-8">
            I have worked on various projects and had the opportunity to explore
            new technologies, while trying to solve new problems. This
            experience has been great and has helped me improve myself on a
            daily basis.
          </p>
        </div>

        <div className="w-full my-10">
          <Tabs defaultValue="All Projects" className="w-full">
            <TabsList className="grid w-full grid-cols-5 bg-gray-100 dark:bg-gray-900">
              <TabsTrigger value="All Projects">All Projects</TabsTrigger>
              <TabsTrigger value="website">Websites</TabsTrigger>
              <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="swiftUI">Swift UI</TabsTrigger>
            </TabsList>
            <TabsContent value="All Projects">
              <AllProjects />
            </TabsContent>
            <TabsContent value="website">
              <WebsiteProjects />
            </TabsContent>
            <TabsContent value="mobile">
              <MobileApps />
            </TabsContent>
            <TabsContent value="backend">
              <BackendProjects />
            </TabsContent>
            <TabsContent value="swiftUI">
              <IOSProjectSection />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
