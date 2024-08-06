import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkType } from "./../../../../../jerakine/network/INetworkType";

export class SocialEmblem implements INetworkType
{

	public static readonly protocolId: number = 6817;

	public symbolShape: number = 0;
	public symbolColor: number = 0;
	public backgroundShape: number = 0;
	public backgroundColor: number = 0;

    public constructor()
    {

    }

    public getTypeId()
    {
        return SocialEmblem.protocolId;
    }

    public initSocialEmblem(symbolShape: number = 0, symbolColor: number = 0, backgroundShape: number = 0, backgroundColor: number = 0): SocialEmblem
    {
        this.symbolShape = symbolShape;
        this.symbolColor = symbolColor;
        this.backgroundShape = backgroundShape;
        this.backgroundColor = backgroundColor;
        return this;
    }

    public serialize(output: ICustomDataOutput)
    {
        this.serializeAs_SocialEmblem(output);
    }

    public serializeAs_SocialEmblem(output: ICustomDataOutput)
    {
        if(this.symbolShape < 0)
        {
            throw new Error("Forbidden value (" + this.symbolShape + ") on element symbolShape.");
        }
        output.writeVarShort(this.symbolShape);
        output.writeInt(this.symbolColor);
        if(this.backgroundShape < 0)
        {
            throw new Error("Forbidden value (" + this.backgroundShape + ") on element backgroundShape.");
        }
        output.writeByte(this.backgroundShape);
        output.writeInt(this.backgroundColor);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_SocialEmblem(input);
    }

    private deserializeAs_SocialEmblem(input: ICustomDataInput)
    {
        this._symbolShapeFunc(input);
        this._symbolColorFunc(input);
        this._backgroundShapeFunc(input);
        this._backgroundColorFunc(input);
    }

    private _symbolShapeFunc(input: ICustomDataInput)
    {
        this.symbolShape = input.readVarUhShort();
        if(this.symbolShape < 0)
        {
            throw new Error("Forbidden value (" + this.symbolShape + ") on element of SocialEmblem.symbolShape.");
        }
    }

    private _symbolColorFunc(input: ICustomDataInput)
    {
        this.symbolColor = input.readInt();
    }

    private _backgroundShapeFunc(input: ICustomDataInput)
    {
        this.backgroundShape = input.readByte();
        if(this.backgroundShape < 0)
        {
            throw new Error("Forbidden value (" + this.backgroundShape + ") on element of SocialEmblem.backgroundShape.");
        }
    }

    private _backgroundColorFunc(input: ICustomDataInput)
    {
        this.backgroundColor = input.readInt();
    }

}