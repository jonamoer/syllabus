GDM Ghent Syllabus
==================

Template for syllabi and modules at Artevelde University College Ghent, Graphical and digital media.


Create a new New syllabus
-------------------------

 1. Create a new folder `Syllabi` in your home directory and navigate to it from the command line.
 1. Create a new repo for the **syllabus** (`1617_...`) or **module** (`mod_...`) on <https://github.com/gdmgent/>.  
    E.g. name: `1617_webd4`, description: `Webdesign IV - Academic Year 2016-17`, public, Add .gitignore: **None**, Add a license: **Apache License 2.0**
 1. Clone the new repo from within the new `Syllabi` folder: `git clone https://github.com/gdmgent/1617_...`.
 1. Add a new `README.md` to the remote repo.
 1. Checkout a new branch in repo: `git checkout -b gh-pages`
 1. Clone this repository: `git clone https://github.com/gdmgent/syllabus`.
 1. Change `./gulpfile/config.yaml` to include the new syllabus or module name.
 1. Run `gulp --production` from the `Syllabi/syllabus` folder to update the new syllabus folder.