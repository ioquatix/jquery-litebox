# jQuery.LiteBox

A ridiculously light-weight lightbox/gallery plugin for jQuery. Convention over configuration. Uses flexbox for completely responsive CSS. Check out the [example](https://ioquatix.github.io/jquery-litebox/example/index.html).

Can be used in conjunction with [Utopia::Gallery](https://github.com/ioquatix/utopia-gallery).

## Installation

Add this line to your website's Gemfile:

	yarn add 'jquery-litebox'

And then add the following to your HTML:

```html
<link rel="stylesheet" href="jquery.litebox.css" type="text/css" media="screen" />
<script src="jquery.litebox.js"></script>
```

## Usage

jQuery.LiteBox attaches to elements and essentially makes them full-screen when tapped. By default, it supports HTML `<img>` tags.

```html
<a href="image.jpg" class="thumbnail">
	<img src="image-thumbnail.jpg" />
</a>

<script>
	jQuery(function($) {
		$('a.thumbnail').litebox();
	});
</script>
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## License

Released under the MIT license.

Copyright, 2012, by [Samuel G. D. Williams](http://www.codeotaku.com/samuel-williams).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
