mblog: A minimal markdown blog
==============================

A simple Markdown based blog that you can use everyday.

Main Features
=============

-   Very usable
-   Customizable

Usage
=====

```bash
pip install mblog && mblog
```

Now open the Login page at <http://localhost:5000/login>

The password is `Password` by default.

Modifications
=============

The original version of this can be found at
<https://github.com/coleifer/peewee>

It has been customized for adding File Uploads, Password Hashing, Better
Error Handling, Custom Branding, complete with Python2 and Python3
Portability.

Technical
=========

It is Single-user software. You have control over your data. It
persists data to `~/.${USER}-blog.db`, uploads files to
`~/.${USER}-blog-uploads`.

It allows you to authenticate via the `PASWORD_HASH` variable or the
contents of `~/.${USER}-blog.pass`. Passwords are obtained by:

```bash
$ echo -n Password | openssl dgst -binary -sha256 | base64
```

Questions?
==========

Reach out to *Karthik Kumar Viswanathan* `karthikkumar at gmail dot com`
for any suggestions, feedback. PRs welcome.
