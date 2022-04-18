import React, { useEffect } from "react";
import termGenImg from "assets/term-square.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { TermsFormValues } from "types";
import { saveID } from "helpers/terms";
import { useMutation } from "react-query";
import axios from "axios";
import { useLoading } from "App";

export const GeneratorRoute = () => {
  const { register, handleSubmit } = useForm<TermsFormValues>();
  const navigate = useNavigate();

  const mutation = useMutation(
    (form: TermsFormValues) => {
      return axios.post<{ id: number | string }>(
        "https://b5ca99f98ce3.ngrok.io/api/v1/shopify/terms/",
        form
      );
    },
    {
      onSuccess: ({ data: { id } }) => {
        saveID(id);
        navigate(`/result/${id}`);
      },
    }
  );

  const { toggleLoading } = useLoading();

  useEffect(() => {
    toggleLoading(mutation.isLoading);
  }, [mutation.isLoading, toggleLoading]);

  const sendForm = async (form: TermsFormValues) => {
    mutation.mutate(form);
  };

  return (
    <div className="card pb-16">
      <header className="flex items-center gap-10">
        <div className="shrink">
          <img src={termGenImg} alt="Terms and Conditions Generator" />
        </div>
        <h2 className="text-black font-semibold text-4xl shrink-[2]">
          Generate Terms and Conditions for your store for free
        </h2>
      </header>

      <p className="mt-5 text-slate-600">
        One of the most important steps when creating an online store is to
        implement a terms and conditions page. You can use an automatic Shopboxo
        generator available on our free generators page. You don’t need to write
        this document from scratch, you just need to provide a little
        information about your business and we will do all the hard work
        ourselves and in just a few minutes you will have Terms and Conditions
        tailored for your web store. Please fill out the fields below and you
        will receive an email custom made terms and conditions for your website.
      </p>
      <h3 className="mt-12">Terms and Conditions Generator</h3>
      <p className="text-slate-600 mt-2">
        Fill in the form below, and the tool will generate a free terms and
        conditions page for your website.
      </p>

      <form
        className="mt-10 space-y-12 w-[min(750px,_100%)]"
        onSubmit={handleSubmit(sendForm)}
      >
        <div className="space-y-6">
          <h4>Company information</h4>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label>Company name</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter your company name"
                {...register("name")}
              />
            </div>
            <div>
              <label>Company Website</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter your company website"
                {...register("url")}
              />
            </div>
          </div>
          <div>
            <label>Address</label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter full address"
              {...register("address")}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label>City</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter City"
                {...register("city")}
              />
            </div>
            <div>
              <label>Zip Code</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter zip code"
                {...register("zip")}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label>State</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter state"
                {...register("state")}
              />
            </div>
            <div>
              <label>Country</label>
              <input
                className="form-input"
                type="text"
                placeholder="Enter country"
                {...register("country")}
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h4>Personal information</h4>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <label>E-mail</label>
              <input
                className="form-input"
                type="email"
                placeholder="Enter your e-mail address"
                {...register("email")}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="rounded-lg bg-primary-500 py-3 px-8 font-semibold text-white"
        >
          Generate my Terms & Conditions
        </button>
      </form>

      <hr className="my-12" />
      <h3>How it works</h3>
      <div className="grid md:grid-cols-3 text-slate-500 mt-3 gap-3">
        <div>
          <h5 className="font-semibold mb-3">1. Enter business details</h5>
          <p className="text-sm">
            Fill the above mentioned details of your business for terms &
            conditions template.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">2. Submit details</h5>
          <p className="text-sm">
            Verify the details and submit. We'll take it forward from here.
          </p>
        </div>
        <div>
          <h5 className="font-semibold mb-3">3. Check email</h5>
          <p className="text-sm">
            Voila! You can use the terms & conditions for your website.
          </p>
        </div>
      </div>
    </div>
  );
};
