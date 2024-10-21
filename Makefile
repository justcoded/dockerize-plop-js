.PHONY: default chl chl-first

default:
	@echo 'Plop helper from JustCoded'

##
# CHANGELOG vars and targets
##
CONV_CHL_IMAGE :=  ghcr.io/justcoded/plopjs:latest
CONV_CHL_DR := docker run -it --rm --volume "$$PWD":/codebase ${CONV_CHL_IMAGE} bash
CONV_CHL_CMD := conventional-changelog --config changelog-config.php

##
# @command chl 	Generate changelog based on conventional commits
##
chl:
	${CONV_CHL_DR} \
		-c "${CONV_CHL_CMD}"

##
# @command chl-first 	Generate changelog based on conventional commits, first version
##
chl-first:
	${CONV_CHL_DR} \
		-c "${CONV_CHL_CMD} --first-release"
