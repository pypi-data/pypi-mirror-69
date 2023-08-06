Flask-Theme[¶](#flask-theme "Permalink to this headline")
=========================================================

Flask-Theme makes it easy for your application to support a wide range of appearances.

*   [Writing Theme](#writing-theme)
    *   [Writing Templates](#writing-templates)
    *   [`info.json` Fields](#info-json-fields)
    *   [Tips for Theme Writers](#tips-for-theme-writers)
*   [Using Themes in Your Application](#using-themes-in-your-application)
    *   [Theme Loaders](#theme-loaders)
    *   [Rendering Templates](#rendering-templates)
    *   [Selecting Themes](#selecting-themes)
    *   [Tips for Application Programmers](#tips-for-application-programmers)
*   [API Documentation](#api-documentation)
    *   [Loading Themes](#loading-themes)
*   [Thanks To](#thanks-to)

Writing Theme[¶](#writing-theme "Permalink to this headline")
-------------------------------------------------------------

A theme is simply a folder containing static media (like CSS files, images, and JavaScript) and Jinja2 templates, with some metadata. A theme folder should look something like this:

```
my_theme/
    info.json
    license.txt
    templates/
        layout.html
        index.html
    static/
        style.css
```

The `info.json` file contains the theme’s metadata, so that the application can provide a nice switching interface if necessary. `license.txt` is optional and contains the full text of the theme’s license. `static` is served directly to clients, and `templates` contains the Jinja2 template files.

Note that exactly what templates you need to create will vary between applications. Check the application’s docs (or source code) to see what you need.

### Writing Templates[¶](#writing-templates "Permalink to this headline")

Flask uses the Jinja2 template engine, so you should read [its documentation](http://jinja.pocoo.org/2/documentation/templates) to learn about the actual syntax of the templates.

All templates loaded from a theme will have a global function named `theme` available to look up the theme’s templates. For example, if you want to extend, import, or include another template from your theme, you can use `theme(template_name)`, like this:

```
{% extends theme('layout.html') %}
{% from theme('_helpers.html') import form_field %}
```

If the template you requested doesn’t exist within the theme, it will fall back to using the application’s template. If you pass `false` as the second parameter, it will only return the theme’s template.

```
{% include theme('header.html', false) %}
```

You can still import/include templates from the application, though. Just use the tag without calling `theme`.

```
{% from '_helpers.html' import link_to %}
{% include '_jquery.html' %}
```

You can also get the URL for the theme’s media files with the `theme_static` function:

```
<link rel=stylesheet href="{{ theme_static('style.css') }}">
```

### `info.json` Fields[¶](#info-json-fields "Permalink to this headline")

- `application` : required

    This is the application’s identifier. Exactly what identifier you need to use varies between applications.

- `identifier` : required

    The theme’s identifier. It should be a Python identifier (starts with a letter or underscore, the rest can be letters, underscores, or numbers) and should match the name of the theme’s folder.

- `name` : required

    A human-readable name for the theme.

- `author` : required

    The name of the theme’s author, that is, you. It does not have to include an e-mail address, and should be displayed verbatim.

- `description`

    A description of the theme in a few sentences. If you can write multiple languages, you can include additional fields in the form `description_lc`, where `lc` is a two-letter language code like `es` or `de`. They should contain the description, but in the indicated language.

- `website`

    The URL of the theme’s Web site. This can be a Web site specifically for this theme, Web site for a collection of themes that includes this theme, or just the author’s Web site.

- `license`

    A simple phrase indicating your theme’s license, like `GPL`, `MIT/X11`, `Public Domain`, or `Creative Commons BY-SA 3.0`. You can put the full license’s text in the `license.txt` file.

- `license_url`

    If you don’t want to include the full text in the `license.txt` file, you can include a URL for a Web site where the text can be viewed. This is good for long licenses like the GPL or Creative Commons licenses.

- `preview`

    A preview image for the theme. This should be the filename for an image within the `static` directory.

- `doctype`

    The version of HTML used by the theme. It can be `html4`, `html5`, or `xhtml`. The application can use this to do things like switch the output format of a markup generator. (The default if this is left out is `html5` to be safe. HTML5 is used by the majority of Flask users, so it’s best to use it.)

- `options`

    If this is given, it should be a dictionary (object in JSON parlance) containing application-specific options. You will need to check the application’s docs to see what options it uses. (For example, an application like a pastebin or wiki that highlights source code may want the theme to specify a default [Pygments](http://pygments.org/) style in the options.)

### Tips for Theme Writers[¶](#tips-for-theme-writers "Permalink to this headline")

*   Always specify a doctype.
*   Remember that you have to use double-quotes with strings in JSON.
*   Look at the non-theme templates provided with the application. See how they interact.
*   Remember that most of the time, you can alter the application’s appearance completely just by changing the layout template and the style.

Using Themes in Your Application[¶](#using-themes-in-your-application "Permalink to this headline")
---------------------------------------------------------------------------------------------------

To set up your application to use themes, you need to use the `setup_themes` function. It doesn’t rely on your application already being configured, so you can call it whenever is convenient. It does three things:

*   Adds a `ThemeManager` instance to your application as `app.theme_manager`.
*   Registers the `theme` and `theme_static` globals with the Jinja2 environment.
*   Registers the `_themes` module or blueprint (depending on the Flask version) to your application, by default with the URL prefix `/_themes` (you can change it).

Warning

Since the “Blueprints” mechanism of Flask 0.7 causes headaches in module compatibility mode, `setup_themes` will automatically register `_themes` as a blueprint and not as a module if possible. If this causes headaches with your application, then you need to either (a) upgrade to Flask 0.7 or (b) set `Flask<0.7` in your requirements.txt file.

### Theme Loaders[¶](#theme-loaders "Permalink to this headline")

`setup_themes` takes a few arguments, but the one you will probably be using most is `loaders`, which is a list of theme loaders to use (in order) to find themes. The default theme loaders are:

*   `packaged_themes_loader`, which looks in your application’s `themes` directory for themes (you can use this to ship one or two default themes with your application)
*   `theme_paths_loader`, which looks at the `THEME_PATHS` configuration setting and loads themes from each folder therein

It’s easy to write your own loaders, though - a loader is just a callable that takes an application instance and returns an iterable of `Theme` instances. You can use the `load_themes_from` helper function to yield all the valid themes contained within a folder. For example, if your app uses an “instance folder” like [Zine](http://zine.pocoo.org/) that can have a “themes” directory:

```
def instance_loader(app):
    themes_dir = os.path.join(app.instance_root, 'themes')
    if os.path.isdir(themes_dir):
        return load_themes_from(themes_dir)
    else:
        return ()
```

### Rendering Templates[¶](#rendering-templates "Permalink to this headline")

Once you have the themes set up, you can call in to the theme machinery with `render_theme_template`. It works like `render_template`, but takes a `theme` parameter before the template name. Also, `static_file_url` will generate a URL to the given static file.

When you call `render_theme_template`, it sets the “active template” to the given theme, even if you have to fall back to rendering the application’s template. That way, if you have a template like `by_year.html` that isn’t defined by the current theme, you can still

*   extend (`{% extends theme('layout.html') %}`)
*   include (`{% include theme('archive_header.html') %}`)
*   import (`{% from theme('_helpers.html') import show_post %}`)

templates defined by the theme. This way, the theme author doesn’t have to implement every possible template - they can define templates like the layout, and showing posts, and things like that, and the application-provided templates can use those building blocks to form the more complicated pages.

### Selecting Themes[¶](#selecting-themes "Permalink to this headline")

How exactly you select the theme will vary between applications, so Flask-Theme doesn’t make the decision for you. If your app is any larger than a few views, though, you will probably want to provide a helper function that selects the theme based on whatever (settings, logged-in user, page) and renders the template. For example:

```
def get_current_theme():
    if g.user is not None:
        ident = g.user.theme
    else:
        ident = current_app.config.get('DEFAULT_THEME', 'plain')
    return get_theme(ident)

def render(template, **context):
    return render_theme_template(get_current_theme(), template, **context)
```

Warning

Make sure that you _only_ get `Theme` instances from the theme manager. If you need to create a `Theme` instance manually outside of a theme loader, that’s a sign that you’re doing it wrong. Instead, write a loader that can load that theme and pass it to `setup_themes`, because if the theme is not loaded by the manager, then its templates and static files won’t be available, which will usually lead to your application breaking.

### Tips for Application Programmers[¶](#tips-for-application-programmers "Permalink to this headline")

*   Provide default templates, preferably for everything. Use simple, unstyled HTML.
*   If you find yourself repeating design elements, put them in a macro in a separate template. That way, theme authors can override them more easily.
*   Put class names or IDs on any elements that the theme author may want to style. (And by that I mean all of them.) That way they won’t have to override the template unnecessarily if all they want to do is right-align the meta information.

API Documentation[¶](#api-documentation "Permalink to this headline")
---------------------------------------------------------------------

This API documentation is automatically generated from the source code.

### Loading Themes[¶](#loading-themes "Permalink to this headline")

Thanks To[¶](#thanks-to")
-------------------------

- [maxcountryman](https://github.com/maxcountryman/flask-themes)

