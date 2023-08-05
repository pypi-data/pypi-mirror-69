cpu_counts = 4
cls_file = "./class-descriptions-boxable.csv"
 anno_file = "./oidv6-train-annotations-bbox.csv"
geting_class =["A","Person","Apple"]
save_path = "data"

    downloader = Downloader(cpu_counts,cls_file,anno_file,save_path)
	downloader.run(geting_class)