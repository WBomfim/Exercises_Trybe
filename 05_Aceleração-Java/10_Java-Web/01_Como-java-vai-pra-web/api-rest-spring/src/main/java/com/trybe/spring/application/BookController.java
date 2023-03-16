package com.trybe.spring.application;

import com.trybe.spring.domain.Book;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;
import org.springframework.stereotype.Controller;

/**
 * BookController.
 *
 */
@Controller
@Path("/api/books")
public class BookController {
  public List<Book> books = new ArrayList<Book>();

  /**
   * Cadastrar livros.
   */
  @POST
  @Consumes("application/json")
  @Produces("application/json")
  public Response add(Book book) {
    books.add(book);
    return Response.ok(book).build();
  }

  /**
   * Retorna um livro pelo id.
   */
  @GET
  @Path("/{id}")
  @Consumes("application/json")
  @Produces("application/json")
  public Response findById(@PathParam("id") UUID id) {
    Book book = books.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);
    if (book == null) {
      return Response.status(Response.Status.NOT_FOUND).build();
    }
    return Response.ok(book).build();
  }

  @GET
  @Consumes("application/json")
  @Produces("application/json")
  public Response findAll() {
    return Response.ok(books).build();
  }

  /**
   * Atualiza um livro.
   *
   */
  @PUT
  @Path("/{id}")
  @Consumes("application/json")
  @Produces("application/json")
  public Response update(@PathParam("id") UUID id, Book book) {
    Book bookToUpdate = books.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);
    if (bookToUpdate == null) {
      return Response.status(Response.Status.NOT_FOUND).build();
    }

    bookToUpdate.setName(book.getName());
    bookToUpdate.setAuthor(book.getAuthor());
    return Response.ok(bookToUpdate).build();
  }

  /**
   * Deleta um livro pelo id.
   */
  @DELETE
  @Path("/{id}")
  @Consumes("application/json")
  @Produces("application/json")
  public Response delete(@PathParam("id") UUID id) {
    Book book = books.stream().filter(b -> b.getId().equals(id)).findFirst().orElse(null);
    if (book == null) {
      return Response.status(Response.Status.NOT_FOUND).build();
    }
    books.remove(book);
    return Response.ok().build();
  }
}
