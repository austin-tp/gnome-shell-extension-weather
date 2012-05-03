#! /usr/bin/env seed

/*
 *
 *  PO Updater for GNOME Shell Extension Weather
 *
 * Copyright (C) 2012
 *     Christian METZLER <neroth@xeked.com>
 *
 *
 * This file is part of gnome-shell-extension-weather.
 *
 * gnome-shell-extension-weather is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * gnome-shell-extension-weather is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with gnome-shell-extension-weather.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

Gio = imports.gi.Gio;

var xgettext = Seed.spawn("xgettext -o gnome-shell-extension-weather.pot -L python -j --keyword=_ -f POTFILES.in");

var file = Gio.file_new_for_path(".");
var enumerator = file.enumerate_children("standard::name,standard::size");

	while(child = enumerator.next_file())
		if(child.get_name().search(/.po$/) != -1)
    		Seed.spawn("msgmerge -U "+child.get_name()+" gnome-shell-extension-weather.pot");
