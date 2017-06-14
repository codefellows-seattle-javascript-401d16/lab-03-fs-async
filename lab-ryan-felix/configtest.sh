#!/bin/bash
passcolor=$"\e[32m" #green
failcolor=$"\e[31m" #red
normalcolor=$"\e[0m" #default

printf "The project directory must be named lab-[yourname]: ";
if ! [ $(printf '%s\n' "${PWD##*/}" | grep ^lab-) ]; then
  printf "%b failed " "$failcolor"
else
  printf "%b passed " "$passcolor"
fi
printf "%b \n " "$normalcolor"

printf "File .gitignore must be in the project directory: ";
if ! [ -f .gitignore ] ; then
  printf "%b failed " "$failcolor"
else
  printf "%b passed " "$passcolor"
fi
printf "%b \n " "$normalcolor"

printf "File .eslintrc must be in the project directory: ";
if ! [ -f .eslintrc ] ; then
  printf "%b failed " "$failcolor"
else
  printf "%b passed " "$passcolor"
fi
printf "%b \n " "$normalcolor"

printf "File .eslintignore must be in the project directory: ";
if ! [ -f .eslintignore ] ; then
  printf "%b failed " "$failcolor"
else
  printf "%b passed " "$passcolor"
fi
printf "%b \n " "$normalcolor"

printf "File README.md must be in the project directory: "
if ! [ -f README.md ] ; then
  printf "%b failed %b \n" "$failcolor" "$normalcolor"
else
  printf "%b passed %b \n " "$passcolor" "$normalcolor"
  printf "File README.md must not be empty: "
  if [ $(stat -c%s README.md) -le 0 ] ; then
    printf "%b failed %b \n " "$failcolor" "$normalcolor"
  else
    printf "%b passed %b \n " "$passcolor" "$normalcolor"
  fi
fi
